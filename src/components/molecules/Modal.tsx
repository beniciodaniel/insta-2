import { useRecoilState } from 'recoil'
import { modalState } from '../../recoil/atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { useRef, useState } from 'react'
import { CameraIcon } from '@heroicons/react/outline'

import { useSession } from 'next-auth/react'
import { db, storage } from '../../../firebase'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

export function Modal() {
  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef<null | HTMLInputElement>(null)
  const captionRef = useRef<null | HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<
    string | ArrayBuffer | null | undefined
  >(null)
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  const addImageToPost = (event: React.FormEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    const target = event.target as HTMLInputElement
    const files = target.files as FileList

    if (files[0]) {
      reader.readAsDataURL(files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target?.result)
    }
  }

  const uploadPost = async () => {
    if (loading) return

    setLoading(true)

    // Create a post and add to Firestore 'posts' collection
    const docRef = await addDoc(collection(db, 'posts'), {
      username: session?.user.username,
      caption: captionRef.current?.value,
      profileImage: session?.user.image,
      timestamp: serverTimestamp(),
    })

    // Get the post ID for the newly created post
    console.log('New doc added with ID ', docRef.id)

    // Criando um caminho no bucket utilizando o post ID
    const imageRef = ref(storage, `posts/${docRef.id}/image`)

    // upload the image to the Firebase storage with the post ID
    // get a download URL from Firebase storage and update the original post with image
    await uploadString(imageRef, String(selectedFile), 'data_url').then(
      async (snapshot) => {
        const downloadUrl = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadUrl,
        })
      }
    )

    setOpen(false)
    setLoading(false)
    setSelectedFile(null)
  }

  return (
    <Transition.Root show={open}>
      {open && (
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="flex min-h-[800px] items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 m:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div
                className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all
              sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
              >
                <div>
                  {selectedFile ? (
                    <img
                      className="w-full cursor-pointer object-contain"
                      src={String(selectedFile)}
                      alt=""
                      onClick={() => setSelectedFile(null)}
                    />
                  ) : (
                    <div
                      onClick={() => filePickerRef?.current?.click()}
                      className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-100"
                    >
                      <CameraIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden={true}
                      />
                    </div>
                  )}

                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Upload a photo
                      </Dialog.Title>

                      <div>
                        <input
                          ref={filePickerRef}
                          onChange={addImageToPost}
                          type="file"
                          hidden
                        />
                      </div>

                      <div className="mt-2">
                        <input
                          className="w-full border-none text-center focus:ring-0"
                          ref={captionRef}
                          placeholder="Please enter a caption..."
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6">
                    <button
                      onClick={uploadPost}
                      disabled={!selectedFile}
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 sm:text-sm"
                    >
                      {loading ? 'Uploading...' : 'Upload Post'}
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      )}
    </Transition.Root>
  )
}
