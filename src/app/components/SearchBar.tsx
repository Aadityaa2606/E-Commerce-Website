import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";

interface iDefault {
  defaultValue: string | null;
}

export const SearchInput = ({ defaultValue }: iDefault) => {
  // initiate the router from next/navigation

  const router = useRouter();

  // We need to grab the current search parameters and use it as default value for the search input

  const [inputValue, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setValue(inputValue);
  };

  // If the user clicks enter on the keyboard, the input value should be submitted for search

  // We are now routing the search results to another page but still on the same page

  const handleSearch = () => {
    if (inputValue) return router.push(`/?q=${inputValue}`);

    if (!inputValue) return router.push("/");
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <div className="flex bg-secondary p-2 rounded-md">
      <input
        type="text"
        id="inputId"
        placeholder="What are you looking for?"
        value={inputValue ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="text-black bg-[transparent] outline-none border-none placeholder:text-text2"
      />
      <label htmlFor="inputId">
        <Image src="/search.svg" alt="search" width={25} height={25} />
      </label>
    </div>
  );
};
