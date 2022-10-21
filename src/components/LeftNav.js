import React from 'react';
import { VStack,Text} from '@chakra-ui/react';
import {IoDiamondOutline} from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
const LeftNav = () => {
    return (
        <VStack w="250px" h="100vh" justifyContent="space-evenly" spacing="20" bgColor="#FEDBD0">
            <VStack>
                <IoDiamondOutline fontSize="35px" color='#442B2D' />
                <Text color="#442B2D" fontSize="20px" as="b" >SHRINE</Text>
            </VStack>
            <VStack spacing="5">
                <Text color="#8F726E" as="b">TOUT</Text>
                <Text color="#8F726E" as="b">ACCESSOIRES</Text>
                <Text color="#8F726E" as="b">VETEMENTS</Text>
                <Text color="#8F726E" as="b">MAISON</Text>
                <Text color="#8F726E" as="b">SE DECONNECTER</Text>
            </VStack>
            <AiOutlineSearch fontSize="30px"/>
        </VStack>
    );
};

export default LeftNav;