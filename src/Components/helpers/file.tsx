import { Box, Flex, Image, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import useLang from "./lang";

interface FileInputProps {
  setIcons: Dispatch<SetStateAction<string>>;
  default?: string;
}

function FileInput(props: FileInputProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | undefined>(props.default);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("accessToken");
  const { t } = useLang();

  const addImage = (formData: FormData) => {
    axios({
      method: "post",
      url: `${baseUrl}/file/upload`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => props.setIcons(res.data.data.data.path))
      .catch((e) => console.log(e));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      if (file.type === "image/gif" || file.type === "image/webp") {
        return;
      }
      reader.onloadend = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    addImage(formData);
  };

  useEffect(() => {
    if (props.default && !imgUrl) {
      setImgUrl(props.default);
    }
  }, [props.default, imgUrl]);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="5px"
        border="1px solid rgb(231, 231, 231)"
      >
        <Input
          border="none"
          type="file"
          id="files"
          display="none"
          onChange={handleFileChange}
        />
        <Flex
          w="50%"
          alignItems="center"
          justifyContent="center"
          as="label"
          cursor="pointer"
          htmlFor="files"
          h="100%"
          border="1px dashed rgb(189, 189, 189)"
        >
          +
        </Flex>
        <Button variante="default" m="0" fontSize="16px" onClick={handleUpload}>
          {t("save")}
        </Button>
      </Box>
      {(imgUrl || props.default) && (
        <Image
          w="100px"
          h="100px"
          borderRadius="10px"
          objectFit="cover"
          src={imgUrl || props.default}
          alt="Uploaded"
        />
      )}
    </>
  );
}

export default FileInput;
