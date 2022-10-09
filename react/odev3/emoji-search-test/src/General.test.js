import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import EmojiResults from "./EmojiResults";
import EmojiResultsRow from "./EmojiResultRow";
import filterEmoji from "./filterEmoji";
import Header from "./Header";
import SearchInput from "./SearchInput";


describe("First Test",() => {

    let searchText;

    beforeEach(() => {
        render(<Header/>)
        render(<SearchInput/>)
        render(<EmojiResults emojiData={filterEmoji("", 20)} />)
        searchText = screen.getByTestId("searchText")
    })

    

    test('Search Something', () => { 
        const emoji = '100';
        userEvent.type(searchText, emoji);
        // expect(screen.getByText(emoji)).toBeInTheDocument;
        expect(screen.getByText(emoji)).toBeInTheDocument;
     })


    
    test("should second",() => {console.log("done 2")})
    
})
