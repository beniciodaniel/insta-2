import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'

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
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
