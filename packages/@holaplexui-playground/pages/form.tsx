import { Form, Icon, Placement } from "@holaplex/ui-library-react";
import clsx from "clsx";
import { watch } from "fs";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import useUpload from "../hooks/useUpload";

function HidePasswordIcon({ size = 16, color = "none", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.41452 6.5865C10.1952 7.36717 10.1952 8.6345 9.41452 9.4165C8.63386 10.1972 7.36652 10.1972 6.58452 9.4165C5.80386 8.63583 5.80386 7.3685 6.58452 6.5865C7.36652 5.8045 8.63319 5.8045 9.41452 6.5865"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 7.99992C2 7.56059 2.10133 7.12592 2.29733 6.72525V6.72525C3.30733 4.66059 5.53933 3.33325 8 3.33325C10.4607 3.33325 12.6927 4.66059 13.7027 6.72525V6.72525C13.8987 7.12592 14 7.56059 14 7.99992C14 8.43925 13.8987 8.87392 13.7027 9.27458V9.27458C12.6927 11.3393 10.4607 12.6666 8 12.6666C5.53933 12.6666 3.30733 11.3393 2.29733 9.27458V9.27458C2.10133 8.87392 2 8.43925 2 7.99992Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShowPasswordIcon({ size = 16, color = "none", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.70514 9.03858C9.27877 9.75749 8.45061 10.1358 7.62805 9.98746C6.80549 9.83911 6.16168 9.1953 6.01333 8.37274C5.86497 7.55018 6.2433 6.72202 6.96221 6.29565"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9973 11.3309C10.8474 12.203 9.44277 12.6731 7.99956 12.6687C5.60816 12.7113 3.39859 11.397 2.29452 9.2753C1.89792 8.47142 1.89792 7.52878 2.29452 6.7249C2.84668 5.62531 3.72688 4.72447 4.81338 4.14697"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6185 9.42294C13.6453 9.37225 13.6801 9.32678 13.7054 9.27513C14.102 8.47125 14.102 7.52861 13.7054 6.72473C12.6013 4.60302 10.3917 3.28874 8.00031 3.33133C7.85038 3.33133 7.70465 3.35134 7.55664 3.36109"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0021 13.3356L2.66406 1.99756"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface DragDropForm {
  files: File[];
}

export default function App() {
  const [singleValue, setSingleValue] = useState<{
    name: string;
    id: string;
  }>();
  const [multiValue, setMultiValue] = useState<
    {
      name: string;
      id: string;
    }[]
  >();

  const options = [
    { name: "Solana", id: "sol" },
    { name: "Polygon", id: "polygon" },
    { name: "Near", id: "near" },
    { name: "Ethereum", id: "eth" },
    { name: "Sui", id: "sui" },
    { name: "Aptos", id: "aptos" },
    { name: "Avalanche", id: "avalanche" },
    { name: "Bitcoin", id: "btc" },
    { name: "Cardano", id: "ada" },
  ];

  const { control, setValue } = useForm<DragDropForm>();
  const onDrop = useCallback(
    (files: File[]) => {
      setValue("files", files, { shouldValidate: true });
    },
    [setValue]
  );
  const { getRootProps, getInputProps, isDragActive } = useUpload(onDrop);

  return (
    <div className="w-[400px] mx-auto p-4">
      <Form>
        <Form.Label name="Email">
          <Form.Input placeholder="e.g. name@example.com" />
        </Form.Label>

        <Form.Label
          name="Password"
          asideComponent={<div className="text-xs">Forgot Password?</div>}
          className="mt-5"
        >
          <Form.Password
            placeholder="Enter your password"
            showPasswordIcon={<ShowPasswordIcon />}
            hidePasswordIcon={<HidePasswordIcon />}
          />
        </Form.Label>

        <Form.Label name="Description" className="mt-5">
          <Form.TextArea placeholder="Enter a description" />
        </Form.Label>

        <Form.Select
          className="mt-5"
          onChange={(v) => {
            setSingleValue(v);
          }}
          value={singleValue}
        >
          <Form.Select.Button icon={<Icon.Sol />} placeholder="e.g. Solana">
            {singleValue?.name}
          </Form.Select.Button>
          <Form.Select.Options>
            {options.map((option) => (
              <Form.Select.Option key={option.id} value={option}>
                <>{option.name}</>
              </Form.Select.Option>
            ))}
          </Form.Select.Options>
        </Form.Select>

        <Form.Select
          className="mt-5"
          multiple
          onChange={(v) => {
            setMultiValue(v);
          }}
          value={multiValue}
        >
          <Form.Select.Button icon={<Icon.Sol />} placeholder="e.g. Solana">
            {multiValue && multiValue?.length > 0
              ? multiValue[0].name
              : undefined}
          </Form.Select.Button>
          <Form.Select.Options>
            {options.map((option) => (
              <Form.Select.Option key={option.id} value={option}>
                <>{option.name}</>
              </Form.Select.Option>
            ))}
          </Form.Select.Options>
        </Form.Select>

        <Form.Label name="Drop Image" className="mt-5">
          <Controller
            name="files"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Form.DragDrop
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                isDragActive={isDragActive}
                onChange={(e: any) => onChange(e.target.value)}
                multiple={false}
              >
                <div
                  className={clsx(
                    "flex items-center justify-center border border-dashed border-gray-200 cursor-pointer rounded-md",
                    {
                      "bg-gray-100": isDragActive,
                      "p-6 text-center text-gray-500": !value,
                    }
                  )}
                >
                  {value ? (
                    <div className="bg-white rounded-lg p-3 overflow-hidden">
                      {value.map((file, index) => (
                        <Form.DragDrop.Preview key={index} value={file} />
                      ))}
                    </div>
                  ) : (
                    <>
                      Drag & drop photo here <br />
                      Required jpeg, png or svg. Max 2mb.
                    </>
                  )}
                </div>
              </Form.DragDrop>
            )}
          />
        </Form.Label>
        <Form.Label
          name="Subscribe newsletter"
          placement={Placement.Right}
          className="mt-5 text-xs"
        >
          <Form.Checkbox id="subscribe" />
        </Form.Label>

        <Form.RadioGroup className="mt-5">
          <Form.Label name="Apple" placement={Placement.Right}>
            <Form.RadioGroup.Radio value="apple" name="fruits" />
          </Form.Label>
          <Form.Label name="Mango" placement={Placement.Right}>
            <Form.RadioGroup.Radio value="Mango" name="fruits" />
          </Form.Label>
        </Form.RadioGroup>

        <Form.RadioGroup className="mt-5">
          <Form.Label
            name="Red"
            htmlFor="red"
            peerClassName="peer-checked:text-red-500"
          >
            <Form.RadioGroup.Radio
              id="red"
              value="red"
              name="color"
              className="peer hidden"
            />
          </Form.Label>
          <Form.Label
            name="Green"
            htmlFor="green"
            peerClassName="peer-checked:text-green-500"
          >
            <Form.RadioGroup.Radio
              id="green"
              value="green"
              name="color"
              className="peer hidden"
            />
          </Form.Label>
        </Form.RadioGroup>
      </Form>
    </div>
  );
}
