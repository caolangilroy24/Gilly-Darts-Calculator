import React from 'react'


interface MultipleProps {
    multiple: string;
}

export default function Multiple({multiple}: MultipleProps) {
  return (
    <div className='bull'>
        {multiple}
    </div>
  )
}
