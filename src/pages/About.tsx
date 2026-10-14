import { Anchor, Box, Button, Center, Flex, Image, List, Space, Text, Title } from "@mantine/core";
import GitHubButton from "../components/GitHubButton";
import CreditsFooter from "../components/CreditsFooter";
import { TEXT_COLOR } from "../defs/constants";
import bmc_button from "../assets/bmc-button.png";
import "../styles/about.css";

export default function About() {
  return (
    <Flex 
      direction="column"
      justify="space-between"
      h={"100vh"}
    >
      <Box m={30}>
        <Center mt="xl">
          <Flex
            direction="column"
            gap="sm"
            w={750}
          >
            <Title>Hej och välkommen till Tonplatstrappan!</Title>
            <Text size="lg">Det här är en hjälp för att öva ditt inre gehör. Tonplatstrappan är ett enkelt verktyg som genererar kombinationer av siffror som ska sjungas och/eller spelas som en melodi.</Text>
            <Text size="lg">Systemet med tonplatser är flexibelt för att du kan spela i vilken tonart eller skala som helst. Genom att du sjunger på siffror/tonplatser lär du känna hur en skala fungerar och hur de olika tonplatserna känns/låter, i förhållande till grundton.</Text>
            <Text size="lg">Det finns också möjlighet att öva harmoniskt gehör, d.v.s toner kombinerade i treklanger/ackord.</Text>
            
            <Flex
              className="buttons-container"
              align="center"
              justify="space-evenly"
              gap="md"
              mt="md"
            >
              <Anchor
                href="https://www.buymeacoffee.com/abbevass"
                target="_blank"
              >
                <Image
                  className="bmc-button"
                  src={bmc_button}
                  alt="Buy Me A Coffee"
                />
              </Anchor>
              <Anchor
                href="https://github.com/abbevass/tone-ladder"
                target="_blank"
                td="none"
              >
                <GitHubButton />
              </Anchor>
            </Flex>
            
            <Title order={2} mt="md">
              Tips på arbetsmetod:
            </Title>
            <List
              withPadding
              spacing="sm"
              size="lg"
            >
              <List.Item>Välj ett paket i ”Inställningar” - prova dig fram; det finns allt från grundläggande till avancerade paket.</List.Item>
              <List.Item>Börja enkelt!</List.Item>
              <List.Item>Spela en grundton på ett instrument. Ett bra sätt att starta övningen är att låta den klinga hela tiden medan du övar, då hör du tydligt hur skalans olika steg låter tillsammans med grundton (intervall).</List.Item>
              <List.Item>Sjung igenom tonplatstrappan (till vänster på sidan) i en vald skala, t.ex. dur eller ren moll.</List.Item>
              <List.Item>Sjung sedan melodin till höger utifrån siffrorna. Ge dig själv stöd från ett instrument om du behöver. (klingande grundton t.ex.)</List.Item>
              <List.Item>Om det är svårt att hitta tonplatserna när det är språng i sifferkombinationen - sjung då först den/de siffror som du ska hoppa över, men lite svagt. Nästa gång kanske du bara kan tänka tonen utan att sjunga den. Till sist, ta språnget utan att sjunga ”mellantonen/-erna”.</List.Item>
              <List.Item>När du har klarat melodin trycker du på den gröna knappen ”Ny melodi” och sjunger nästa melodi.</List.Item>
            </List>

            <Title order={2} mt="md">
              Inställningar
            </Title>
            <Text size="lg">Om du trycker på knappen ”Inställningar” kan du välja vilken svårighetsgrad du vill ha på din övning i rutan "Färdiga inställningar". Du kan också göra dina egna paket, som sparas på din dator.</Text>
            
            <Title order={2} mt="md">
              Flera sätt att jobba med tonplatstrappan
            </Title>
            <Title order={4} mt="sm">Skalor</Title>
            <Text>Det finns många olika skalor du kan öva på. Se en lista av skalor här: <a href="/tone-ladder/about/scales" style={{ color: TEXT_COLOR }}>länk till skalor</a></Text>
            <Title order={4} mt="sm">Rytm</Title>
            <Text>När du börjar känna att det går bra och du klarar melodierna i det paket du har valt kan du rytmisera på något sätt, så att det blir ”mer musik” än bara en räcka av toner. Försök att få det att bli en musikalisk fras, eller bestäm dig för en särskild rytm som du vill använda genomgående.</Text>
            <Title order={4} mt="sm">Spela på instrument</Title>
            <Text>Spela melodierna istället för att sjunga, eller både och. Gör musikaliska fraser av tonplatsmelodin, eller bara träna på att hitta tonerna på ditt instrument. Utveckla genom att spela i olika tonarter och skalor.</Text>
            <Title order={4} mt="sm">Skriva noter</Title>
            <Text>Om du vill träna att skriva noter kan du bestämma en tonart och en skala (förslag på skalor, <a href="/tone-ladder/about/scales" style={{ color: TEXT_COLOR }}>klicka här</a>) - tryck fram en melodi som du skriver ner på noter, med fasta eller tillfälliga förtecken. Sedan kan du spela eller sjunga efter noterna, så har du gått hela varvet runt!</Text>
          </Flex>
        </Center>

        <Center>
          <Button
            className="about-back-button"
            m={20}
            size="lg"
            variant="outline"
            color={TEXT_COLOR}
            onClick={() => 
              window.location.href = "/tone-ladder"
            }
          >
            Tillbaka
          </Button>
        </Center>
      </Box>
      <CreditsFooter />
      <Space h={10} />
    </Flex>
  );
}