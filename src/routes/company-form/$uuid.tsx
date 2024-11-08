import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/company-form/$uuid')({
  component: () => <div>Hello /company-form/$uuid!</div>,
})
