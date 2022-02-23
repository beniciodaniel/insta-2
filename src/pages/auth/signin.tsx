import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { Header } from '../../components/organisms'

interface Provider {
  name: string
  id: string | undefined
}

interface Props {
  providers: Provider[]
}

export default function SignIn({ providers }: Props) {
  return (
    <>
      <Header />
      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          className="w-80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
          alt="Instagram logo"
        />
        <p className="font-xs italic">
          This is not a real app, it is built for educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
