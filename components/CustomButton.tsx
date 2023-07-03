'use client'
import { CustomButtonProps } from "@/types"
import Image from "next/image"


const CustomButton = ({isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => {
  return (
    <button
    disabled={isDisabled}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span>
            {title}
        </span>
    </button>
  )
}

export default CustomButton