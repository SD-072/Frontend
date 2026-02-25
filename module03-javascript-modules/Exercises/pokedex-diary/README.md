# Pokédex Diary

## Features

- **Browse Pokémon**: View a list of popular Pokémon with their images, names, and stats
- **Search Functionality**: Search for specific Pokémon by name or ID number
- **Catch Pokémon**: Add Pokémon to your personal collection
- **Personal Notes**: Add and save personal notes for each caught Pokémon
- **Remove Pokémon**: Remove Pokémon from your collection
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: All data is saved locally in your browser

## Functional Requirements Implemented

This project implements the following functional requirements:

- **FR005**: Core Web APIs Usage (DOM, Web Storage, and Fetch APIs)
- **FR006**: TailwindCSS Styling
- **FR007**: File Structure (index.html ↔ main.js, pokedex.html ↔ pokedex.js)
- **FR008**: Navigation Bar (navbar on both pages)
- **FR009**: Fetch Pokémon List (displays popular Pokémon on homepage)
- **FR010**: Search with Dialog (search by name or ID with dialog results)
- **FR011**: Pokémon Cards (displays image, name, and stats)
- **FR012**: Catch'em! (catch button stores Pokémon in localStorage)
- **FR013**: Pokédex Page Display (shows caught Pokémon from localStorage)
- **FR014**: Personal Notes (add and persist notes for each Pokémon)

## Usage

### Homepage (index.html)

- Browse through a list of popular Pokémon
- Use the search bar to find specific Pokémon by name or ID
- Click "Catch" to add Pokémon to your collection
- Already caught Pokémon will show "Caught ✔" and be disabled

### Pokédex Page (pokedex.html)

- View all your caught Pokémon
- Add personal notes for each Pokémon
- Remove Pokémon from your collection
- Notes are automatically saved to localStorage

## Technical Details

- **APIs Used**: [PokéAPI](https://pokeapi.co/) for Pokémon data
- **Styling**: TailwindCSS via CDN
- **Storage**: Browser localStorage for data persistence

## Future Enhancements

Potential improvements could include:

- Pagination for the Pokémon list
- Filtering and sorting options
- Export/import functionality for the Pokédex
- More detailed Pokémon information
- User authentication and cloud storage
