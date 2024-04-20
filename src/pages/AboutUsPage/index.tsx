import {Center, Text} from "@mantine/core";
import './AboutUsPage.css'
import {Layout} from "../../components/Layout";

export const AboutUsPage = () => {
    return (
        <Layout>
            <Center w={"100%"}><Text size={"2.5rem"} fw={600} mb={"md"}>О нас</Text></Center>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, pulvinar sit amet magna quis, accumsan semper velit. Nam scelerisque porta nunc non malesuada. Proin vitae mattis justo, nec hendrerit ipsum. Nunc ante massa, molestie sed feugiat vitae, lacinia eget nulla. Mauris efficitur posuere vestibulum. Vivamus massa ante, aliquet id tempor at, viverra nec ex. Phasellus at sem eget lacus tempor tempus euismod quis tellus. Nullam lobortis, tortor id lacinia laoreet, nisl nunc interdum sapien, a laoreet nunc augue non ex. Fusce et eros erat. Fusce at est odio. Phasellus condimentum porta lacus a maximus.
                Mauris volutpat tincidunt velit nec bibendum. Aenean egestas mauris nisi, a malesuada ex sollicitudin vitae. Quisque rutrum ante eget fermentum feugiat. Vestibulum et metus odio. Phasellus in erat eget metus tristique ornare in ac dui. Maecenas sed euismod tellus, quis euismod erat. Phasellus ultricies magna eget augue maximus, sollicitudin blandit sapien rhoncus. Pellentesque eget dui libero. Duis rhoncus luctus est, vitae tempor elit. Mauris blandit sollicitudin lobortis. Vestibulum vestibulum sollicitudin felis, vitae pharetra odio finibus ac. Proin quis lectus neque. Ut vel condimentum est. Donec ac ultrices elit. Fusce consectetur sollicitudin mollis. Etiam leo urna, viverra sit amet arcu ut, luctus rhoncus mi.
            </Text>
        </Layout>
    )
}