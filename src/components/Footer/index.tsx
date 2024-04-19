import {Flex, Title, Text, Anchor} from "@mantine/core";
import {IconBrandTelegram, IconMail} from "@tabler/icons-react";

export const Footer = () => {
    return (
        <div style={{ borderTop: "1px solid var(--mantine-color-dark-4)", padding: "15px 48px", zIndex: "200 !important", position: "relative", backgroundColor: "var(--mantine-color-dark-7)" }}>
            <Flex w={"100%"} h={"100%"} justify={"space-between"} align={"center"}>
                <div>
                    <Title order={2} mb={"sm"}>Economa</Title>
                    <Text size={"sm"}>© 2024 "Economa". Все права защищены.</Text>
                </div>
                <div>
                    <Anchor style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }} href={"https://t.me/podnebesny00"}>
                        <Text>Telegram</Text>
                        <IconBrandTelegram size={20} stroke={2} />
                    </Anchor>
                    <Anchor style={{ display: "flex", gap: "5px", justifyContent: "flex-end" }} href={"mailto:gigantofthought@outlook.com"}>
                        <Text>Email</Text>
                        <IconMail size={20} stroke={2} />
                    </Anchor>
                </div>
            </Flex>
        </div>
    );
};