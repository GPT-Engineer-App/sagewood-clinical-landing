// Complete the Index page component for Sagewood Clinical Research
import { Box, Button, Container, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLanguage } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10}>
        <Header />
        <HeroSection />
        <AboutSection />
        <ContactSection />
        <QualifyInvitationSection />
      </VStack>
    </Container>
  );
};

const QualifyInvitationSection = () => {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl">See if you qualify for our studies! Contact us to learn more.</Text>
    </Box>
  );
};

const Header = () => {
  return (
    <Box py={4} display="flex" justifyContent="space-between" alignItems="center">
      <Image src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTYWdld29vZCUyMENsaW5pY2FsJTIwUmVzZWFyY2glMjBsb2dvfGVufDB8fHx8MTcxMzk1OTgyNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sagewood Clinical Research Logo" boxSize="100px" />
      <Button leftIcon={<FaLanguage />} colorScheme="teal" variant="solid">
        EN/ES
      </Button>
    </Box>
  );
};

const HeroSection = () => {
  return (
    <VStack spacing={4} textAlign="center">
      <Heading as="h1" size="2xl">
        Welcome to Sagewood Clinical Research
      </Heading>
      <Text fontSize="xl">Dedicated to advancing medicine in Naples, FL</Text>
      <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGluaWNhbCUyMHJlc2VhcmNoJTIwb2ZmaWNlfGVufDB8fHx8MTcxMzk1OTgyNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Clinical Research Office" boxSize="400px" />
    </VStack>
  );
};

const AboutSection = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.700")} p={10} borderRadius="lg">
      <VStack spacing={4}>
        <Heading as="h2" size="lg">
          About Us
        </Heading>
        <Text>Sagewood Clinical Research is committed to providing high-quality clinical trials to help advance medical research. A medical trial is a research study that evaluates the safety and effectiveness of new treatments or medications in people. Located in the heart of Naples, FL, we collaborate with pharmaceutical companies to test the latest treatments and medications.</Text>
        <Text>Estamos comprometidos a ofrecer ensayos clínicos de alta calidad para ayudar a avanzar la investigación médica. Un ensayo médico es un estudio de investigación que evalúa la seguridad y eficacia de nuevos tratamientos o medicamentos en personas. Ubicados en el corazón de Naples, FL, colaboramos con empresas farmacéuticas para probar los tratamientos y medicamentos más recientes.</Text>
        <Text>Participants in our studies receive compensation for their time, with amounts up to $3,000 depending on the study. Your collaboration is invaluable in advancing medical research, benefiting the industry, and helping countless others.</Text>
        <Text>Los participantes en nuestros estudios reciben compensación por su tiempo, con montos de hasta $3,000 dependiendo del estudio. Su colaboración es invaluable para avanzar en la investigación médica, beneficiando a la industria y ayudando a innumerables personas.</Text>
        <Text>Medical research plays a crucial role in developing new treatments and improving health outcomes. By participating in clinical trials, individuals contribute to medical advancements that can lead to better treatment options and potentially save lives.</Text>
      </VStack>
    </Box>
  );
};

const ContactSection = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }} spacing={10} justifyContent="center" alignItems="center">
      <ContactInfo icon={FaMapMarkerAlt} text="801 Anchor Rode Dr Unit 304 Naples, FL 34103 United States" />
      <ContactInfo icon={FaPhone} text="+1 (239) 434-9710" />
      <ContactInfo icon={FaEnvelope} text="info@sagewoodclinicalgroup.com" />
    </Stack>
  );
};

const ContactInfo = ({ icon, text }) => {
  const IconComponent = icon;
  return (
    <VStack>
      <IconComponent size="24px" />
      <Text>{text}</Text>
    </VStack>
  );
};

export default Index;
