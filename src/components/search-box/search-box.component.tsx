import { ChangeEventHandler, ChangeEvent } from "react";

import "./search-box.styles.css";

const name: string = "1234";

const func: (a: string, b: number, c: boolean) => string = (a, b, c) => {
  return a + b + c;
};

const func2 = (a: string, b: string, c: string): string => {
  return a + b + c;
};

// type;

interface ISearchBoxProps extends IChangeHandlerProps {
  className: "string";
  placeholder?: "string";
}

interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}

type CanadianAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

type ItalianAddress = {
  street: string;
  region: string;
};

type Address = CanadianAddress | USAddress | ItalianAddress;

const address: Address = {
  street: "",
  province: "",
  state: "",
  region: "",
};

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // onChangeHandler2: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
