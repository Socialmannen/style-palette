# Plan: Rörelsesystem och animerade standardkomponenter

## Mål
Skapa ett lugnt och professionellt rörelsespråk som följer med designsystemet. Alla animationer ska använda samma centrala hastigheter och kurvor, kunna stängas av, och automatiskt respektera användarens inställning för minskad rörelse.

## Rörelseinställningar
- Lägg till gemensamma tokens för snabb, normal och långsam rörelse samt standardkurvor för in-, ut- och lägesförändringar.
- Ge anslutna projekt två globala reglage via attribut på sidans rot:
  - `data-motion="subtle | expressive | none"` för rörelsenivå, med `subtle` som standard.
  - `data-motion-speed="slow | normal | fast"` för hastighet, med `normal` som standard.
- Låt `prefers-reduced-motion: reduce` automatiskt motsvara i praktiken avstängd rörelse, oavsett vald nivå.
- Exponera återanvändbara Tailwind-klasser för fade, scale, slide och mjuka lägesbyten utan lokala tidsvärden.

## Nya komponenter
- **Sheet / sidopanel:** öppnas från vänster, höger, toppen eller botten. Inkluderar dimmad bakgrund, fokuslås, återställd fokus, stängning med Escape och klick utanför, tillgänglig titel/beskrivning samt stängknapp.
- **Dialog:** centrerad modal med mjuk fade/scale, samma fokus- och stängningsbeteende som sidopanelen.
- **Accordion:** en eller flera öppna sektioner, animerad höjd och roterande indikator.
- **Collapsible:** enklare öppna/stäng-block med samma höjdanimering.
- **Popover:** för mindre interaktivt innehåll, med riktad fade/slide beroende på placering.
- **Tooltip:** kort fördröjning och diskret fade/slide; aldrig som enda bärare av viktig information.
- **Tabs:** tangentbordsstyrda flikar med mjuk innehållsväxling och tydligt aktivt läge.
- **Toast:** tillfälliga bekräftelser och felmeddelanden med lugn in-/utgång och stöd för flera notiser.
- **Skeleton:** subtil laddningspuls som stängs av vid minskad rörelse.
- **Progress:** bestämd indikator med mjuk värdeövergång samt obestämd variant.

## Befintliga komponenter
- Koppla Button och ButtonLink till gemensamma rörelsetokens för färgbyte och diskret tryckrespons.
- Ge Switch en konsekvent glidrörelse.
- Förbättra DropdownMenu och undermenyer med riktad öppning/stängning som använder samma tokens.
- Håll Card statisk som standard; eventuell rörelse ska vara en namngiven interaktiv variant, inte ett automatiskt beteende.

## Komponentöversikt
- Lägg till en rörelsekontroll för nivå och hastighet så alla exempel kan provas direkt.
- Visa och dokumentera varje ny komponent och alla sidopanelriktningar.
- Lägg till praktiska exempel, kodexempel och statusåterkoppling för interaktioner.
- Säkerställ att översikten fungerar i både ljust och mörkt läge samt med samtliga färgpaletter.

## Bibliotek och dokumentation
- Exportera varje ny komponent och dess typade egenskaper från bibliotekets gemensamma ingång.
- Dokumentera användning, exempel och olämpliga användningsfall i designsystemets metadata.
- Uppdatera reglerna så framtida projekt använder rörelsetokens i stället för egna tidsvärden och alltid respekterar minskad rörelse.
- Behåll all konsumentkod självbärande under designsystemets katalog.

## Verifiering
- Kontrollera tangentbord, fokuslås, Escape, klick utanför och återställd fokus för paneler och dialoger.
- Prova alla fyra panelriktningar samt alla tre hastigheter och rörelsenivåer.
- Verifiera `prefers-reduced-motion`, ljust/mörkt läge och mobil/dator.
- Kontrollera att inga animationer orsakar överlapp, layoutskiften eller blockerad interaktion.
- Bekräfta ren byggstatus och inga fel i webbläsaren.

## Avgränsning
Detta omfattar standardiserade gränssnittsrörelser och komponenter. Sidövergångar mellan olika sidor, avancerade gester och dekorativa bakgrundsanimationer ingår inte.
