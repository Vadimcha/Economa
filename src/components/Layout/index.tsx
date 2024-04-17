import {AppShell, Container} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Header} from "../Header";
import {TheoryNavBar} from "../TheoryNavBar";
import {ITheoryItem} from "../../models/ITheoryItem";
import {Footer} from "../Footer";

export const Layout = ({ children, theoryItem }: { children: React.ReactNode, theoryItem?: ITheoryItem }) => {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: theoryItem == undefined, mobile: !opened } }}
            padding="md"
        >
            <Header opened={opened} toggle={toggle} />
            { theoryItem && <TheoryNavBar theoryItem={theoryItem}/> }
            <AppShell.Main>
                <Container p={"sm"}>
                    { children }
                </Container>
            </AppShell.Main>
            <Footer />
        </AppShell>
    );
};