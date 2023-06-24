import React from 'react';
import styles from "../styles/Home.module.css";
import {Box, Flex, Menu, Text, HStack, Spacer, MenuButton, Center, Avatar, Image, Button, MenuList, MenuDivider, MenuItem, } from '@chakra-ui/react';
export function Nav(){
    return (
        <Box className={styles.navbar}>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        maxHeight="max-content"
      >
        <Box p="2">
          <HStack>
            <Image
              src="https://cdn.discordapp.com/attachments/932862356046893076/1118498454574997525/Untitled_design.png"
              alt="logo"
              className="navimg"
              boxSize='5%'
              p='1vh'
            />
            <Text
              className="navtext"
              color="white"
              fontSize="5xl"
              fontFamily="Julius Sans One"
            >
              CarbonLink
            </Text>
          </HStack>
          {/* <Text fontSize='5xl' className='font' fontFamily= 'Julius Sans One'    >PiSpace</Text> */}
        </Box>
        <Spacer />

        <Menu color='black' _light={{bg:'black'}}>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    src=''
                  />
                </MenuButton>
                <MenuList bg='black' alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src='' bg='black'
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Hey</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem _hover={{bg:'#302c34'}} bg='black'>Account Settings</MenuItem>
                  <MenuItem _hover={{bg:'#302c34'}} bg='black'>Logout</MenuItem>
                </MenuList>
              </Menu>
        
        <br/><br/>
      </Flex><br/><br/><br/>

    </Box>
    );
};

