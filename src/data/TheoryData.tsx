import {ITheoryItem} from "../models/ITheoryItem";
import {Text} from "@mantine/core";

export const TheoryData = [
    {
        src_name: "english-name",
        name: "Какая-то теория",
        description: "Описание",
        image: "https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg",
        sections: [
            {
                title: "Lorem ipsum dolor sit amet",
                content: <Text>Morbi tempor neque erat, a vestibulum erat iaculis in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non maximus ligula. Fusce sed vehicula augue. Aliquam vitae sem pulvinar, ullamcorper nunc vel, gravida nisi. In auctor leo magna. Nulla dignissim finibus vulputate. Vestibulum suscipit vulputate massa, sed euismod massa tempor eleifend. Curabitur quis enim nibh. Donec malesuada gravida elit, in vestibulum nibh tristique ut. Mauris ornare vitae odio non imperdiet. Ut pretium velit sit amet placerat cursus.</Text> ,
            },
            {
                title: "Quisque a libero ac dui ultricies finibus.",
                content: <Text>Duis blandit magna vel nulla congue, ac laoreet dui semper. Quisque a cursus risus. Phasellus dignissim velit elit, nec laoreet diam pulvinar convallis. Mauris rhoncus sollicitudin tellus vitae feugiat. Vivamus non commodo erat. Vestibulum vel libero tincidunt orci iaculis placerat ac id nisl. Nulla placerat lectus felis. Maecenas volutpat massa nisi, et finibus tellus sollicitudin eu. Vivamus laoreet molestie neque, sit amet varius lectus faucibus quis. Suspendisse et mollis diam, sit amet pretium massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc pretium dapibus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis placerat mi, dignissim accumsan dolor tincidunt vel.</Text> ,
            },
            {
                title: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
                content: <Text>Nulla euismod ante arcu, a facilisis nulla mollis vel. Proin vel purus in libero porta ultricies a vel felis. Nulla mollis ipsum sit amet justo ullamcorper, eget ultricies nisi sollicitudin. Praesent sit amet ligula a erat vestibulum euismod vitae non sem. Aenean sed tellus non sapien sagittis facilisis quis ut enim. Vestibulum posuere magna eu urna imperdiet volutpat. Phasellus hendrerit vestibulum nisl, at volutpat velit pulvinar eu. Sed sit amet lectus sit amet leo convallis euismod. Vestibulum in cursus nulla, sit amet interdum lacus. Ut eget convallis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus est libero, in efficitur arcu tincidunt sit amet. Suspendisse ornare metus lobortis nisl venenatis dignissim.</Text> ,
            },
            {
                title: "Nulla ultricies eu nisl id malesuada.",
                content: <Text>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas non ultricies justo, in tempus libero. Nulla sollicitudin non augue eget dignissim. Vivamus sagittis sem sed tempor hendrerit. Sed convallis metus eget tellus rhoncus dictum. Curabitur accumsan, neque at faucibus iaculis, est sem tincidunt lectus, sit amet eleifend neque orci nec mauris.</Text> ,
            },
        ],
    },
    {
        src_name: "english-name1",
        name: "Какая-то ABOBA",
        sections: [
            {
                title: "Параграф cfvsq rhenjq",
                content: <Text>Параграф cfvsq rhenjq</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
        ],
    },
    {
        src_name: "english-name2",
        name: "Какая-то ABOBA",
        sections: [
            {
                title: "Параграф cfvsq rhenjq",
                content: <Text>Параграф cfvsq rhenjq</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
            {
                title: "Параграф 1",
                content: <Text>Какой-то текст</Text> ,
            },
        ],
    },
] as ITheoryItem[]