import Image from "next/image";
import { Inter } from "next/font/google";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Templates from "@/components/Templates";
import NotificationComponent from "@/components/Notifications";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string>("myProjects");
  const [credits, setCredits] = useState<number>(4);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const getOptionStyle = (option: string) => {
    return selectedOption === option
      ? "flex gap-2 text-[#3E3E3E] border-2 rounded-xl p-3 mb-2 text-sm font-semibold text-gray-600"
      : " flex gap-2 mb-2 p-2 text-sm font-medium text-[#83888B] ";
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="bg-white">
        <div className="flex h-screen w-screen">
          <div className="flex flex-col ite ms-start gap-20 font m-4 w-64 self-start justify-start  border-gray-100 border-solid border-2 p-4">
            <div className="flex flex-col ">
              <div className="flex items-center gap-2 justify-center align-middle text-center">
                <Image
                  src="/clearbit-icone-svg-150px.svg"
                  alt="Video fast"
                  height={32}
                  width={32}
                />
                <div className=" self-center text-xl font-bold text-gray-900">
                  Video
                  <text className="italic text-indigo-600"> fast</text>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className={getOptionStyle("myProjects")}
                  onClick={() => handleOptionClick("myProjects")}
                >
                  <Image
                    alt="my-projects"
                    src="/project.svg"
                    width="20"
                    height="20"
                  />
                  MyProjects
                </div>

                <div
                  className={getOptionStyle("allAvatars")}
                  onClick={() => handleOptionClick("allAvatars")}
                >
                  <Image
                    alt="all-avatars"
                    src="/avatar.svg"
                    width="20"
                    height="20"
                  />
                  All Avatars
                </div>
                <div
                  className={getOptionStyle("voices")}
                  onClick={() => handleOptionClick("voices")}
                >
                  <Image
                    alt="voices"
                    src="/outline-voice.svg"
                    width="20"
                    height="20"
                  />
                  Voices
                </div>
              </div>
            </div>
            <div>
              <Button className="w-full bg-[#FFF4F0] p-4 rounded-xl justify-between text-[#363430] hover:bg-orange-100">
                <span className="flex gap-2">
                  <Image
                    src="/thunderbolt-filled.svg"
                    alt="upgrade-plan"
                    width="20"
                    height="20"
                  />
                  Upgrade Plan
                </span>
                <Image
                  src="/arrow-right.svg"
                  alt="upgrade-plan"
                  width="20"
                  height="20"
                />
              </Button>
              <div
                className={getOptionStyle("pricing")}
                onClick={() => handleOptionClick("pricing")}
              >
                <Image
                  src="/dollar-broken.svg"
                  alt="shield"
                  width="20"
                  height="20"
                />
                Pricing
              </div>
            </div>
          </div>
          <main className="flex-1 p-6">
            <div className="flex justify-between">
              <div className="text-2xl font-bold text-gray-900">Projects</div>
              <div className="flex items-center space-x-4 ">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="hover:cursor-pointer flex items-center space-x-2 bg-[#FFF4F0] p-3 rounded-xl">
                      <Image
                        src="/magic-hat.svg"
                        alt="magic hat"
                        width="20"
                        height="20"
                      />
                      <span className="text-sm font-semibold text-[#FF4D00]">
                        Your Credits:
                      </span>
                      <span className="text-sm font-semibold text-[#FF4D00]">
                        4
                      </span>
                      <Image
                        src="/add-icon-plus.svg"
                        alt="add credits"
                        width="20"
                        height="20"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="mb-2">
                      <Image
                        src="/magic-hat.svg"
                        alt="magic hat"
                        width="32"
                        height="32"
                        className="self-center"
                      />
                      <DialogTitle className="text-lg font-semibold text-center">
                        Buy more credits
                      </DialogTitle>
                      <DialogDescription className="text-sm text-gray-600  text-center">
                        1 video requires around 2 credits
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mb-4 flex gap-2">
                      <Slider
                        className="bg-slider-track-color"
                        color="#3C50E0"
                        defaultValue={[credits]}
                        max={100}
                        min={0}
                        onValueChange={(value) => setCredits(value[0])}
                      ></Slider>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center space-x-2">
                          <Input
                            aria-label="Credits amount"
                            className="w-16"
                            type="number"
                            value={credits}
                            onChange={(e) => setCredits(Number(e.target.value))}
                          />
                          <span className="text-sm">credits</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full text-center mb-6 text-sm text-gray-600">
                      1 credit ≈ $2
                    </div>

                    <DialogFooter className="flex w-full">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className="w-1/2"
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        className="w-1/2 bg-gradient-to-b from-[#3C45E0] to-[#6275FF]"
                        type="button"
                      >
                        Buy
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Popover>
                  <PopoverTrigger asChild>
                    <div className="rounded-full p-3 border-gray-400 border-solid cursor-pointer">
                      <Image
                        src="/alarm.svg"
                        alt="alarm"
                        width="20"
                        height="20"
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-96">
                    <NotificationComponent />
                    {/* <div className="grid gap-4">
                      <div className="flex justify-between items-center px-2 py-3 border-b">
                        <h2 className="text-lg font-semibold">Notification</h2>
                        <Button className="text-sm" variant="ghost">
                          Clear All
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Notification
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Edit your information in a swipe Sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          12 May, 2025
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Notification
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          24 Feb, 2025
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Notification
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          04 Jan, 2025
                        </p>
                      </div>
                    </div> */}
                  </PopoverContent>
                </Popover>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage alt="User avatar" src="/anime-pfp.svg" />
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mr-4">
                    <DropdownMenuGroup>
                      <DropdownMenuSub>
                        <Dialog>
                          <div className="flex gap-2 items-center m-2">
                            <Avatar className="p-1 ">
                              <AvatarImage
                                alt="User avatar"
                                src="/anime-pfp.svg"
                              />
                            </Avatar>
                            <div>
                              <div className="text-sm font-semibold">
                                Tony Stark
                                <label className=" font-semibold ml-2 text-xs bg-gray-300 px-1.5 rounded-md text-gray-500">
                                  Free
                                </label>
                              </div>
                              <div className="text-sm text-[#475467]">
                                ppots@gmail.com
                              </div>
                            </div>
                          </div>
                          <DialogTrigger asChild>
                            <DropdownMenuSubTrigger className="text-[#3E3E3E] font-medium">
                              <MdOutlinePersonOutline
                                className="mr-2"
                                size="16"
                              />
                              Account
                            </DropdownMenuSubTrigger>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[525px]">
                            <DialogHeader>
                              <DialogTitle>Account</DialogTitle>
                              <DialogDescription className="text-[#475467] text-xs">
                                Choose the avatar that best describes your use
                                case
                              </DialogDescription>
                            </DialogHeader>
                            <div className=" border-t ">
                              <div className="mt-2 flex flex-col">
                                <Label
                                  className="text-sm font-medium text-[#83888B]"
                                  htmlFor="display-name"
                                >
                                  Display name
                                </Label>
                                <text className="mt-1  " id="display-name">
                                  Tony Stark
                                </text>
                              </div>
                              <div className="flex flex-col mt-4">
                                <Label
                                  className="text-sm font-medium text-[#83888B]"
                                  htmlFor="email"
                                >
                                  Email Address
                                </Label>
                                <text className="mt-1 " id="email">
                                  ppots@gmail.com
                                </text>
                              </div>
                              <div className="flex flex-col mt-4">
                                <Label
                                  className="text-sm font-medium text-[#83888B]"
                                  htmlFor="current-plan"
                                >
                                  Current Plan
                                </Label>
                                <div className="flex justify-between">
                                  <div className="flex items-center justify-between">
                                    <span className="justify-start align-top self-start">
                                      Free
                                    </span>
                                  </div>
                                  <Button className=" bg-[#FFF4F0] p-4 rounded-xl justify-between text-[#363430] hover:bg-orange-100">
                                    <span className="flex gap-2">
                                      <Image
                                        src="/thunderbolt-filled.svg"
                                        alt="upgrade-plan"
                                        width="20"
                                        height="20"
                                      />
                                      Upgrade Plan
                                    </span>
                                    <Image
                                      src="/arrow-right.svg"
                                      alt="upgrade-plan"
                                      width="20"
                                      height="20"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 bg-[#EBEEF1] rounded-md px-3 py-2 mt-4">
                                <Image
                                  src="/exclamation.svg"
                                  alt="exclamation"
                                  width="16"
                                  height="16"
                                />
                                <span className="text-sm font-medium text-[#6A7383]">
                                  Your Credits = 24
                                </span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <div className=" bg-gradient-to-b from-[#FF6300] to-[#FF7235]  text-white py-1 px-4 rounded-md w-full flex items-center justify-between">
                                Want to join the affiliate program?
                                <Button
                                  size={"sm"}
                                  className="self-start bg-gradient-to-b from-[#FF6300] to-[#FF7235] border-2 rounded-md border-white text-white ml-2"
                                >
                                  Join Now
                                  <FaArrowRightLong className="ml-2 " />
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-[#3E3E3E] font-medium">
                      <BsQuestionCircle className="mr-2" size="16" />
                      Support
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[#3E3E3E] font-medium">
                      <MdLogout className="mr-2" size="16" />
                      Log out
                    </DropdownMenuItem>
                    <div className=" p-3 text-xs text-gray-500">
                      <a
                        className="hover:text-gray-700 underline cursor-pointer"
                        href="#"
                      >
                        Privacy policy
                      </a>
                      <span className="mx-1">,</span>
                      <a
                        className="hover:text-gray-700 underline cursor-pointer"
                        href="#"
                      >
                        Terms & conditions
                      </a>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div className="flex gap-2 items-center text-[#3E3E3E] font-medium border-b-4 border-[#3E3E3E] w-28">
                <Image src="/play.svg" alt="play" width="20" height="20" />
                <span>My Video</span>
              </div>
              <Button className="bg-gradient-to-b from-[#3C4AE0] to-[#6275FF] text-white">
                <FaPlus className="mr-2" color="white" />
                New video
              </Button>
            </div>

            <div className="mt-6">
              <div className="w-full flex flex-col justify-center items-center ">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/add-media-video.svg"
                    alt="add-media"
                    width="100"
                    height="100"
                    className="place-self-center"
                  />
                  <text className="text-3xl font-semibold text-[#363430]">
                    Create your first video
                  </text>
                  <text className="my-4 leading-10 text-lg flex justify-center text-center items-center text-[#83888B] w-7/12">
                    Click on the below button to kickstart your video creation
                    journey with video fast
                  </text>
                </div>
                <div>
                  <Button className="bg-gradient-to-b from-[#3C4AE0] to-[#6275FF] text-white">
                    <FaPlus className="mr-2" color="white" />
                    New video
                  </Button>
                </div>
              </div>
            </div>
            <Templates />
          </main>
        </div>
      </div>
    </div>
  );
}
