import { faker } from '@faker-js/faker'

export function getFakerUsers(quantity: number) {
  const fakerUsers = [...Array(quantity)].map((_, index) => ({
    ...faker.helpers.contextualCard(),
    id: index,
  }))

  return fakerUsers
}
