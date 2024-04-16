import {AppShell, NavLink} from "@mantine/core";
import {ISection, ITheoryItem} from "../../models/ITheoryItem";
import {useNavigate} from "react-router-dom";
import {IconChevronLeft} from "@tabler/icons-react";

export const TheoryNavBar = ({theoryItem}: {theoryItem: ITheoryItem }) => {
    const navigate = useNavigate()
    return (
        <AppShell.Navbar py="md" px={4} >
            <NavLink
                c={"var(--mantine-color-blue-3)"}
                onClick={() => navigate("/theory")}
                label={"Вернуться к списку теории"}
                rightSection={<IconChevronLeft size={20} stroke={2} />}
            />
            { theoryItem.sections.map((paragraph: ISection, index) => {
                return <NavLink
                    key={index}
                    href={`#${theoryItem.name}-${index}`}
                    label={paragraph.title}
                />
            }) }
        </AppShell.Navbar>
    );
};