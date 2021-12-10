import { FC } from 'react'
import ReactModal from 'react-modal'

interface Props {
  visible: boolean
  // typescript eslint being funny - CBA to invest the time into investigating this.
  // eslint-disable-next-line no-unused-vars
  setVisible: (v: boolean) => void
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minHeight: '300px',
    minWidth: '450px'
  }
}

ReactModal.setAppElement('#root')

export const Modal: FC<Props> = ({ visible, setVisible, children }) => (
  <ReactModal isOpen={visible} onRequestClose={() => setVisible(false)} style={customStyles}>
    {children}
  </ReactModal>
)
