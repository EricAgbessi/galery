import React, { useEffect, useState } from 'react';
import { Button, Input, useDisclosure, VStack } from '@chakra-ui/react';
import {HiShoppingCart} from 'react-icons/hi';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

const Cart = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
   
    return (
      
        <>
            <VStack minH="100vh" paddingTop="10%" justifyContent="flex-start">
                <VStack h="300px"  filter="drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));" ref={btnRef} onClick={onOpen}>
                    <VStack w="60px" minH="60px" borderTopLeftRadius="15px" 
                        borderBottomLeftRadius="15px"  
                        boxShadow="-5px 2px 14px -2px rgba(0,0,0,0.63)"
                        justifyContent="center" 
                        alignItems="center"  bgColor="#FEDBD0"  paddingTop="20px" paddingBottom="20px">
                        <HiShoppingCart fontSize="20px" />
                        <VStack>
                           { props.cart.map((prod)=>{
                                return  <VStack h="50px" w="50px"  borderRadius="20px"  bgPosition="center"bgRepeat="no-repeat" bgSize="contain" 
                                bgImage={prod.img}> 
                                        </VStack>
                             })
                           
                           }
                        </VStack>
                    </VStack>  
                </VStack>   
            </VStack>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>    
    );
};

export default Cart;