import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play Pogble" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The Word is POGBA. Always Has been , always will be. Guess POGBA in 6 tries.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
        This is for my friends Tasos and Minas, who are in love with Paul Pogba. I hope
        this gives them some satisfaction after the departure of Pogba from Manchester United. 
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      You can get the guess in 1 try and share it on twitter!! I will await  your tweets every day 
      (Just like United waited 1.5 years for Paul to decide his contract situation).
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="P"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />

      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        All letters are in the correct spot if u didn't get it already jeez.
      </p>

      <div className="flex justify-center mb-1 mt-4">
      <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="absent"
        />
      <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="absent"
        />
      <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="absent"
        />

        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="absent"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="absent"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        All the letters are absent. One reason could be that the word POGBA doesnt containt any 
        of those letters. Another reason could be that POGBA is better than MESSI, I leave it to you
        to decide.
      </p>

     
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is a wordle spoof/clone based on an open source version of the word guessing game WORDLE
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Check the original Code Here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
