import {AppShell, Burger, Group, UnstyledButton, Text, Title} from "@mantine/core";
import {INavLink, NavLinksData} from "../../data/NavLinksData";
import {useNavigate} from "react-router-dom";
import './Header.css'

export const Header = ({ opened, toggle }: { opened: boolean, toggle: () => void }) => {
    const navigate = useNavigate()
    return (
        <AppShell.Header px={"xl"}>
            <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Group justify="space-between" style={{ flex: 1 }}>
                    <UnstyledButton className="btn" component={Title} order={1} onClick={() => navigate('/')}>
                        Economa
                    </UnstyledButton>
                    <Group ml="xl" gap="md" visibleFrom="sm">
                        { NavLinksData.map((link: INavLink) => {
                            return <UnstyledButton key={link.src} onClick={() => navigate(link.src)}>
                                <Text size={"lg"} className={"btn"}>{link.name}</Text>
                            </UnstyledButton>
                        }) }
                    </Group>
                </Group>
            </Group>
        </AppShell.Header>
    );
};