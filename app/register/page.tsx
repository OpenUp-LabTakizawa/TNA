import { Step } from '@/app/components/step'
import type { Steps } from '@/app/interfaces/steps'
import { ProfileForm } from './components/profileForm'

export const STEPS: Steps = ['必要情報の入力', '入力確認', '完了'] as const

export default function Register() {
  return (
    <>
      <Step steps={STEPS} targetStep={0} />
      <ProfileForm />
    </>
  )
}
