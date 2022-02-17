import Image from 'next/image'

export function Logo() {
  return (
    <div>
      <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
        <Image
          objectFit="contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
          layout="fill"
        />
      </div>
      <div className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
        <Image
          objectFit="contain"
          src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
          layout="fill"
        />
      </div>
    </div>
  )
}
