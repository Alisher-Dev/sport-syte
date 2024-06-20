import { Box, Image, Text } from "@chakra-ui/react";

function UstozItem() {
  return (
    <Box>
      <Box boxShadow="-1px 3px 10px rgba(180, 180, 180, 0.4)">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d186.58923054302997!2d60.6075194!3d41.5599874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc93b02466799%3A0xeaa23fff9be8f49d!2sDarital!5e0!3m2!1sru!2s!4v1718899440631!5m2!1sru!2s"
          width="100%"
          height="450"
          loading="lazy"
          re-fer-re-rpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Text mt="20px" fontSize="35px" fontWeight="600" textAlign="center">
        Ustaz haqida
      </Text>
      <Box mt="20px" display="flex" gap="20px">
        <Image
          w="50%"
          borderRadius="10px"
          h="400px"
          objectFit="cover"
          src="https://img.freepik.com/free-photo/sports-teacher-with-her-students_23-2149070717.jpg"
          alt="error in img"
        />
        <Box>
          <Text fontSize="20px" fontWeight="600" color="rgb(44, 44, 44)">
            Kamran Rasulov
          </Text>
          <Text
            mt="10px"
            fontSize="18px"
            fontWeight="500"
            color="rgba(88, 88, 88, 0.9)"
          >
            O‘zbekiston Jang San’ati O‘zbekiston Respublikasi tayekvondo ITF
            Federatsiyasi Prezidenti, O‘zbekistonda xizmat ko‘rsatgan murabbiy,
            qora kamar 7 Dan Tayekwon-do sohibi, tajribali jang san’ati ustasi
            Po‘lat Usmonov, shuningdek, o‘zbek jang san’at federatsiyasi faxriy
            prezidenti Nasirova A.X. rahnamoligida{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default UstozItem;