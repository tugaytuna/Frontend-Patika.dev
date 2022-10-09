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

    test('header', () => {
        const headerTitle = screen.getByText('Emoji Search');
        expect(headerTitle).toBeInTheDocument;
      });

    test("listed all emojies",() => {
        const listOfEmojies = screen.getAllByText("Click to copy emoji")
        expect(listOfEmojies.length).toEqual(20);
    })


    test('Search Something', () => { 
        const emoji = '100';
        // userEvent.type(searchText, emoji);
        // expect(screen.getByText(emoji)).toBeInTheDocument;
        render(<EmojiResults emojiData={filterEmoji("smile", 20)} />)
        const emojiList = screen.getAllByText("Click to copy emoji");
        expect(emojiList.length).toBeGreaterThan(1);
     })


     test('copy', () => {
        const click = screen.getAllByText('Click to copy emoji').at(0);
        const parent = click.parentElement;
        expect(parent.getAttribute('data-clipboard-text').length).toBeGreaterThan(0);
      });
    
})
