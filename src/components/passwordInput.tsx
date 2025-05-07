// import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
// import { PopUpPasswordTips } from "./popUpPasswordTips";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordInput(props: PasswordInputProps) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [LevelListIndex, setLevelListIndex] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  const levelList = [
    { label: "Too Short", color: "#e02424" },
    { label: "Weak", color: "#f98080" },
    { label: "Medium", color: "#e3a008" },
    { label: "Strong", color: "#31c48d" },
    { label: "Very Strong", color: "#057a55" },
  ];

  const checkPasswordStrength = (password: string) => {
    let index = 0;
    if (password.length > 6) {
      if (/[a-z]/.test(password)) index++;
      if (/[0-9]/.test(password)) index++;
      if (/[A-Z]/.test(password)) index++;
      if (/[^A-Za-z0-9]/.test(password)) index++;
    }
    console.log(index);

    setLevelListIndex(index);
  };
  return (
    <>
      <div className="flex flex-col gap-2 w-64">
        <div className="flex justify-evenly items-center border-b-2 border-gray-200">
          <input
            className="w-50 h-10 rounded-xl border-none focus:ring-2 focus:ring-transparent focus:outline-none focus:border-transparent"
            type={passwordVisibility ? "text" : "password"}
            placeholder="Password"
            value={props.value}
            onChange={(e) => {
              props.onChange(e)
              checkPasswordStrength(e.target.value);
            }}
          ></input>
          <div
            className="w-10 h-10 cursor-pointer flex items-center justify-center"
            onClick={() => {
              setPasswordVisibility(!passwordVisibility);
            }}
          >
            {passwordVisibility ? <Eye /> : <EyeOff />}
          </div>
        </div>

        <div className="flex gap-4 flex-col items-end w-full ">
          <div className="flex gap-1 w-full">
            {levelList.map((level, index) => (
              <motion.div
                key={index}
                className="w-1/5 h-1"
                animate={{
                  backgroundColor:
                    index <= LevelListIndex
                      ? levelList[LevelListIndex].color
                      : "#e5e7eb",
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <p className={`text-sm text-${levelList[LevelListIndex].color}`}>
              {levelList[LevelListIndex].label}
            </p>
            {/* <div
              className="w-5 h-5 cursor-pointer flex items-center justify-center"
              onMouseEnter={() => {
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
            >
              {isOpen && <PopUpPasswordTips  password={password}/>}
              <Info size={15} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}