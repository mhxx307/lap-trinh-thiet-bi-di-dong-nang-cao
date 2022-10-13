import { useContext } from "react";
import { FlatList, View } from "react-native";
import Context from "../store/Context";
import BookItem from "./BookItem";

export default function BookList() {
    const { state } = useContext(Context);
    const { books } = state;
    return (
        <View>
            <FlatList
                data={books}
                renderItem={({ item, index }) => (
                    <BookItem item={item} index={index} />
                )}
                keyExtractor={(item) => `${item.name}`}
            />
        </View>
    );
}
