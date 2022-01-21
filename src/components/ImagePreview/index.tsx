/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import Modal from 'react-modal'

interface Props {
  file: File
}

const ImagePreview: React.FC<Props> = ({ file }) => {
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  const openModal = () => {
    setOpen(true)
  }

  return (
    <>
      <div
        onClick={openModal}
        className="border-2 border-stone-300 hover:border-stone-500 cursor-pointer transition w-max p-3 rounded-md flex items-center justify-center"
      >
        {file.name}
      </div>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className="p-0 absolute top-0 left-0 right-0 bottom-0 max-w-full w-max m-auto h-full max-h-72 px-3"
        ariaHideApp={false}
      >
        <img
          src={URL.createObjectURL(file)}
          alt={file.name}
          className="w-full h-full object-contain"
        />
      </Modal>
    </>
  )
}

export default ImagePreview
