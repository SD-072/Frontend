# Component Structure Overview

```mermaid
flowchart TD

%% 🌙 GLOBAL DARK THEME
classDef default fill:#1e1e1e,stroke:#888,stroke-width:1px,color:#fff;

%% --- Graph ---
    subgraph Entry_Point
        Main[main.jsx] --> Browser[BrowserRouter]
        Browser --> App[App.jsx]
    end

    subgraph Routing_and_Layout
        App --> Routes
        Routes --> MainLayout[MainLayout.jsx]
    end

    subgraph Layout_Components
        MainLayout --> State[State: destinations]
        MainLayout --> NavBar
        MainLayout --> Outlet
        MainLayout --> Footer
    end

    subgraph Pages_via_Outlet
        Outlet --> Home[Home.jsx]
        Outlet --> Destinations[Destinations.jsx]
        Outlet --> SingleDest[SingleDestination.jsx]
        Outlet --> About
        Outlet --> Contact
        Outlet --> NotFound
    end

    subgraph Shared_Components
        Home --> DestCard1[DestinationCard]
        Destinations --> DestCard2[DestinationCard]
    end

    subgraph Data_Flow
        State -.-> Outlet
        Outlet -.-> Home
        Outlet -.-> Destinations
        Outlet -.-> SingleDest
        SingleDest -.-> Slug[slug]
    end

%% 🌈 DARK MODE CLASS DEFINITIONS (High Contrast)
classDef file fill:#2d2d2d,stroke:#7a9cff,stroke-width:2px,color:#ffffff;
classDef component fill:#2a382d,stroke:#9cffb5,stroke-width:2px,color:#ffffff;
classDef logic fill:#2a2f38,stroke:#9cbaff,stroke-width:2px,color:#ffffff;

%% 🌈 APPLY CLASSES
class Main,App,MainLayout,Home,Destinations,SingleDest,About,Contact,NotFound,NavBar,Footer,DestCard1,DestCard2 file;
class Browser,Routes,Outlet component;
class State,Slug logic;
```

## Data Flow Description

1. **Data Fetching**: `MainLayout.jsx` fetches the destination data from `/travel.json` inside a `useEffect` hook and stores it in a local state (`destinations`).
2. **Context Passing**: This `destinations` state is passed down to child routes using the `context` prop of the `<Outlet />` component in `MainLayout`.
3. **Data Consumption**:
   - `Home.jsx`, `Destinations.jsx`, and `SingleDestination.jsx` retrieve this data using the `useOutletContext()` hook.
   - `SingleDestination.jsx` additionally uses `useParams()` to extract the `slug` from the URL to find and display the specific destination.
