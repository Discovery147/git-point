export const pl = {
  auth: {
    login: {
      connectingToGitHub: 'Łączenie z GitHubem...',
      preparingGitPoint: 'Przygotowanie GitPoint...',
      cancel: 'ANULUJ',
      welcomeTitle: 'Witaj w GitPoint',
      welcomeMessage: 'Najlepsza integracja z GitHubem jest 100% za darmo',
      notificationsTitle: 'Kontrola notyfikacji',
      notificationsMessage:
        'Przeglądanie i kontrola wszystkich nieprzeczytanych notifykacji i konwersjacji',
      reposTitle: 'Repozytoria i Użytkownicy',
      reposMessage:
        'W łatwy sposób otrzymasz informację o repozytorium, użytkowniku i organizacji',
      issuesTitle: 'Problemy i Pull Requesty',
      issuesMessage:
        'Powiadom o konwersjacji, zmergowanym pull requeście i więcej',
      signInButton: 'ZALOGUJ',
    },
    welcome: {
      welcomeTitle: 'Witaj w GitPoint',
    },
    events: {
      welcomeMessage:
        'Witaj! To jest Twój wątek z newsami - pomoże w byciu na bieżąco z ostanią aktywnością w repozytoriach i użytkownikach, których obserwujesz.',
      commitCommentEvent: 'komentarz do komita',
      createEvent: 'utworzenie {{object}}',
      deleteEvent: 'usunięcie {{object}}',
      issueCommentEvent: '{{action}} w {{type}}',
      issueEditedEvent: '{{action}} swój komentarz w {{type}}',
      issueRemovedEvent: '{{action}} swój komentarz w {{type}}',
      issuesEvent: '{{action}} problem',
      publicEvent: {
        action: 'utworzenie',
        connector: 'publiczny',
      },
      pullRequestEvent: '{{action}} pull request',
      pullRequestReviewEvent: '{{action}}  przegląd pull requesta',
      pullRequestReviewCommentEvent: '{{action}} w pull requeście',
      pullRequestReviewEditedEvent:
        '{{action}} swój komentarz do pull requestu',
      pullRequestReviewDeletedEvent:
        '{{action}} swój komentarz do pull requestu',
      releaseEvent: '{{action}} release',
      atConnector: 'na',
      toConnector: 'do',
      types: {
        pullRequest: 'pull request',
        issue: 'problem',
      },
      objects: {
        repository: 'repozytorium',
        branch: 'branch',
        tag: 'tag',
      },
      actions: {
        added: 'dodał',
        created: 'utworzył',
        edited: 'zedytował',
        deleted: 'usunął',
        assigned: 'przypisał',
        unassigned: 'usunął przypisanie',
        labeled: 'oznaczył',
        unlabeled: 'odznaczył',
        opened: 'otworzył',
        milestoned: 'dodał do milestone',
        demilestoned: 'usunął z milestone',
        closed: 'zamknął',
        reopened: 'otworzył ponownie',
        review_requested: 'zażądał recenzji',
        review_request_removed: 'usunął żądanie recenzji',
        submitted: 'wysłał',
        dismissed: 'cofnął',
        published: 'dodał',
        publicized: 'udostępnił',
        privatized: 'ukrył',
        starred: 'oznaczył gwiazdką',
        pushedTo: 'wypchnął z',
        forked: 'sforkował',
        commented: 'dodał komentarz',
        removed: 'usunął',
      },
    },
    profile: {
      orgsRequestApprovalTop: 'Nie widzisz wszystkich swoich organizacji?',
      orgsRequestApprovalBottom:
        'Być może musisz wystąpić o ich zatwierdzenie.',
      codePushCheck: 'Sprawdź nowsze wersje',
      codePushChecking: 'Sprawdzanie nowszych wersji...',
      codePushUpdated: 'To jest ostatnia wersja',
      codePushAvailable: 'Nowsza wersja dostępna!',
      codePushNotApplicable: 'Niedostępne w trybie debug',
    },
    userOptions: {
      donate: 'Zrób darowiznę',
      title: 'Opcje',
      language: 'Język',
      privacyPolicy: 'Polityka Prywatności',
      signOut: 'Wyloguj Się',
    },
    privacyPolicy: {
      title: 'Polityka Prywatności',
      effectiveDate: 'Ostatnia Wersja: 15 Lipca, 2017',
      introduction:
        'Cieszymy się, że korzystasz z GitPoint! Nasza Polityka Prywatności ma po pierwsze pomóc Ci zrozumieć co robimy — a czego nie robimy — z danymi naszych użytkowników.',
      userDataTitle: 'DANE UŻYTKOWNIKÓW',
      userData1:
        'Twoje dane z GitHuba nie są przez nas przetwarzane. Po autentykacji, token OAuth jest zapisany bezpośrednio na nośniku Twojego urządzenia. Nie jest możliwe odczytanie ponowne tej informacji przez nas. Nigdy nie czytamy bezpośrednio tokena użytkownika i nie przetwarzamy go w inny sposób.',
      userData2:
        'Oznacza to, że w żaden pośredni albo bezpośredni sposób, nie używamy, przekazujemy lub udostępniamy informacji o użytkowniku GitHuba. Jeżeli niepubliczne informacje zostaną w jakikolwiek sposób uwidocznione lub udostępnione, nie będziemy ich przechowywać ani przetwarzać. Jeżeli nastąpi przypadkowe zapisanie takich informacji, usuniemy je bezzwłocznie, używając bezpiecznych metod usuwania informacji. Podkreślamy, że wybraliśmy specjalnie sposób autentykacji uniemożliwiający bezpośredni dostęp do danych użytkowników.',
      analyticsInfoTitle: 'INFORMACJE O UŻYWANIU APLIKACJI',
      analyticsInfo1:
        'W bieżącej wersji aplikacji używamy Google Analytics i iTunes App Analytics, aby monitorować ruch i trendy użytkowania aplikacji GitPoint. Narzędzia te zbierają informacje wysłane z Twojego urządzenia, w tym wersje urządzenia i system, rejon i informacje o aplikacji klienckiej. Informacje te, użyte bez innych informacji, nie umożliwiają bezpośredniej identyfikacji użytkowników ani pozyskania częściowej informacji o użytkownikach.',
      analyticsInfo2:
        'Jeżeli w przyszłości dołączymy inną usługę zewnętrznego dostawcy w celu zbierania logów, błędów programu oraz innych informacji dotyczących aplikacji, zapewnimy, że informacja użytkownika pozostanie anonimowa i zaszyfrowana.',
      openSourceTitle: 'KOD OTWARTEGO ŹRÓDŁA',
      openSource1:
        'GitPoint jest aplikacją o otwartych kodzie, a historia kontrybucji będzie zawsze dostępna publicznie.',
      openSource2:
        'Przy każdej kontrybucji do kodu aplikacji, przeprowadzamy przegląd kodu, aby zapobiec dodaniu kodu o niepożądanym lub złośliwym działaniu.',
      contactTitle: 'KONTAKT',
      contact1:
        'Dziękujemy za przeczytanie naszej Polityki Prywatności. Mamy nadzieję, że sprawdzi Ci taką samą przyjemność, jaką nam daje podczas jego tworzenia.',
      contact2:
        'W przypadku jakichkolwiek pytań dotyczących tej Polityki Prywatności lub ogólnie aplikacji GitPoint, utwórz nowy problem na',
      contactLink: 'repozytorium GitPoint',
    },
  },
  notifications: {
    main: {
      unread: 'nieprzeczytane',
      participating: 'partycypujący',
      all: 'wszystko',
      unreadButton: 'Nieprzeczytane',
      participatingButton: 'Partycypujący',
      allButton: 'Wszystko',
      retrievingMessage: 'Pobieranie notyfikacji',
      noneMessage: 'Nie masz więcej notyfikacji tego rodzaju',
      markAllAsRead: 'Oznacz wszystkie jako przeczytane',
    },
  },
  search: {
    main: {
      repositoryButton: 'Repozytoria',
      userButton: 'Użytkownicy',
      searchingMessage: 'Szukanie w {{query}}',
      searchMessage: 'Szukaj w: {{type}}',
      repository: 'repozytorium',
      user: 'użytkownik',
      noUsersFound: 'Nie znaleziono użytkownika :(',
      noRepositoriesFound: 'Nie znaleziono repozytorium :(',
    },
  },
  user: {
    profile: {
      userActions: 'Akcje użytkownika',
      unfollow: 'Przestań obserwować',
      follow: 'Obserwuj',
    },
    repositoryList: {
      title: 'Repozytoria',
    },
    followers: {
      title: 'Obserwujący',
      text: 'Obserwujący',
      followsYou: 'Obserwuje Cię',
    },
    following: {
      title: 'Obserwowani',
      text: 'Obserwowani',
      followingYou: 'Obserwujesz',
    },
  },
  repository: {
    main: {
      shareRepositoryTitle: 'Udostępnij {{repoName}}',
      shareRepositoryMessage: 'Check out {{repoName}} do GitHub. {{repoUrl}}',
      repoActions: 'Akcje Repozytorium',
      forkAction: 'Sforkuj',
      starAction: 'Polub',
      unstarAction: 'Usuń Polubienie',
      shareAction: 'Udostępnij',
      unwatchAction: 'Przestań obserwować',
      watchAction: 'Obserwuj',
      ownerTitle: 'Właściciel',
      contributorsTitle: 'Kontrybutorzy',
      noContributorsMessage: 'Brak kontrybutorów',
      sourceTitle: 'ŹRÓDŁO',
      readMe: 'README',
      viewSource: 'Zobacz Kod',
      issuesTitle: 'PROBLEMY',
      noIssuesMessage: 'Brak problemów',
      noOpenIssuesMessage: 'Brak otwartych problemów',
      viewAllButton: 'Zobacz Wszystko',
      newIssueButton: 'Nowy Problem',
      pullRequestTitle: 'PULL REQUESTY',
      noPullRequestsMessage: 'Brak pull requestów',
      noOpenPullRequestsMessage: 'Brak otwartych pull requestów',
      starsTitle: 'Polubienia',
      forksTitle: 'Forki',
      forkedFromMessage: 'sforkowany z',
      starred: 'Polubiony',
      watching: 'Obserwowany',
      watchers: 'Obserwujący',
    },
    codeList: {
      title: 'Kod',
    },
    issueList: {
      title: 'Problemy',
      openButton: 'Otwarte',
      closedButton: 'Zamknięte',
      searchingMessage: 'Szukanie {{query}}',
      noOpenIssues: 'Brak otwartych problemów!',
      noClosedIssues: 'Brak zamkniętych problemów!',
    },
    pullList: {
      title: 'Pull Requesty',
      openButton: 'Otwarte',
      closedButton: 'Zakmnięte',
      searchingMessage: 'Szukanie {{query}}',
      noOpenPulls: 'Brak otwartych pull requestów!',
      noClosedPulls: 'Brak zamkniętych pull requestów!',
    },
    pullDiff: {
      title: 'Diff',
      numFilesChanged: '{{numFilesChanged}} plików',
      new: 'NOWY',
      deleted: 'USUNIĘTY',
      fileRenamed: 'Nazwa pliku zmieniona bez innych zmian',
    },
    readMe: {
      readMeActions: 'README Dostępne Akcje',
      noReadMeFound: 'Brak README.md',
    },
  },
  organization: {
    main: {
      membersTitle: 'CZŁONKOWIE',
      descriptionTitle: 'OPIS',
    },
    organizationActions: 'Organizacja Dostępne Akcje',
  },
  issue: {
    settings: {
      title: 'Ustawienia',
      pullRequestType: 'Pull Requesty',
      issueType: 'Problem',
      applyLabelButton: 'Dodaj Etykietę',
      noneMessage: 'Brak',
      labelsTitle: 'ETYKIETY',
      assignYourselfButton: 'Przypisz Siebie',
      assigneesTitle: 'PRZYPISANY',
      actionsTitle: 'AKCJE',
      unlockIssue: 'Odblokuj {{issueType}}',
      lockIssue: 'Zablokuj {{issueType}}',
      closeIssue: 'Zamknij {{issueType}}',
      reopenIssue: 'Otwórz ponownie {{issueType}}',
      areYouSurePrompt: 'Czy na pewno?',
      applyLabelTitle: 'Dodaj etykietę do tego problemu',
    },
    comment: {
      commentActions: 'Dodaj komentarz akcji',
      editCommentTitle: 'Edytuj Komentarz',
      editAction: 'Edytuj',
      deleteAction: 'Usuń',
    },
    main: {
      assignees: 'Przypisany',
      mergeButton: 'Merge Pull Request',
      noDescription: 'Brak opisu.',
      lockedCommentInput: 'Zablokowane, ale wciąż możesz dodać komentarz...',
      commentInput: 'Dodaj komentarz...',
      lockedIssue: 'Problem jest zablokowany',
      states: {
        open: 'Otwarty',
        closed: 'Zamknięty',
        merged: 'Zmergowany',
      },
      screenTitles: {
        issue: 'Problem',
        pullRequest: 'Pull Request',
      },
      openIssueSubTitle: '#{{number}} utworzony {{time}} temu przez {{user}}',
      closedIssueSubTitle:
        '#{{number}} użytkownika {{user}} został zamknięty {{time}} temu',
      issueActions: 'Problemy Dostępne Akcje',
    },
    newIssue: {
      title: 'Nowy Problem',
      missingTitleAlert: 'Musisz zmienić tytuł problemu!',
      issueTitle: 'Tytuł Problemu',
      writeATitle: 'Tutaj wpisz tytuł Twojego problemu',
      issueComment: 'Komentarz do problemu',
      writeAComment: 'Tutaj wpisz komentarz do Twojego problemu',
    },
    pullMerge: {
      title: 'Merge Pull Request',
      createMergeCommit: 'Utwórz komit z mergem',
      squashAndMerge: 'Squashuj i zmerguj',
      merge: 'merge',
      squash: 'squash',
      missingTitleAlert: 'Podaj tytuł komitu!',
      commitTitle: 'Tytuł Komitu',
      writeATitle: 'Tutaj podaj tytuł komitu',
      commitMessage: 'Treść komitu',
      writeAMessage: 'Tutaj wpisz treść komitu',
      mergeType: 'Typu merga',
      changeMergeType: 'Zmień Typ Merga',
    },
  },
  common: {
    bio: 'BIO',
    stars: 'Polubione',
    orgs: 'ORGANIZACJE',
    noOrgsMessage: 'Brak organizacji',
    info: 'INFO',
    company: 'Firma',
    location: 'Lokalizacja',
    email: 'Email',
    website: 'Strona',
    repositories: 'Repozytoria',
    cancel: 'Anuluj',
    yes: 'tak',
    ok: 'OK',
    submit: 'Wyślij',
    relativeTime: {
      past: '%s',
      s: '%ds',
      m: '%dm',
      mm: '%dm',
      h: '%dh',
      hh: '%dh',
      d: '%dd',
      dd: '%dd',
      M: '%dmo',
      MM: '%dmo',
      y: '%dy',
      yy: '%dy',
    },
    abbreviations: {
      thousand: 'ts',
    },
    openInBrowser: 'Otwórz W Przeglądarce',
  },
};
