<p align="center">
  <a href="https://letmeask-42c3c.web.app/" target="_black" title="Let me Ask - Demo Project"><img src="https://raw.githubusercontent.com/araguaci/nlw-together-reactjs/8c5990381e6092f62e1d6f48310cc82f299ac6e1/src/assets/images/logo.svg" alt="Letmeask" /></a>
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#todo">Todo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#roadmap">Roadmap</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
<br>

## 🧪 Technologies

This project was developed using the following technologies:

- [React](https://reactjs.org)
- [Sass](https://sass-lang.com/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🔎 Project 

Letmeasak! This is a project developed during the Next Level Week Together, presented by <a href="https://github.com/diego3g">@diego3g</a> CTO at <a href="https://github.com/rocketseat">@rocketseat</a> during June 2021.
Tool that has the purpose of solving questions during a live class. With it you can create private rooms where only those who have the room ID can access, participants can ask questions with Google Account, like on them. The room creator can mark the questions as answered, highlight and remove questions, the room can be closed.

Room-Code: -Md-otlvCJyPPoCBbprh
Demo project [here](https://letmeask-42c3c.web.app).

## 🚀 Getting started

```bash
$ git clone https://github.com/araguaci/nlw-together-reactjs.git
$ cd nlw-together-reactjs
```

Follow the steps below:

```bash
# Install the dependencies
$ yarn

# Start the project
$ yarn start
```

The app will be available for access on your browser at http://localhost:3000

<strong>Note:</strong> to use the project on your own machine or deploy, it is necessary to follow the Firebase configuration rules below.

- Create a new project in Firebase (<a href="https://console.firebase.google.com/u/0/?hl=pt-br">click here</a>); 
- On the project's configuration page, copy the string values ​​from `firebaseConfig`;
- Create a `.env.local` file for environment variables, copy the variables prefixed with `REACT_APP` from `firebaseConfig` in the `firebase.ts` file in the services folder and paste in the `.env.local` file;
- Assign string values ​​that were copied from the Firebase project to these variables;
- In RealTime Database, enter the following rules:
	
```{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)"
          }
        }
      }
    }
  }
}
```
- If you are going to use the Firebase hosting service, delete these files: `.firebase` folder, `.github\workflows` folder, `.firebaserc`, `firebase.json` and `database.rules.json` and follow the deployment instructions from the official Firebase documentation <a href="https://console.firebase.google.com/u/0/project/teste-64e4d/hosting/sites?hl=pt-br">here</a>;
- If you use your GitHub project to deploy, put the Firebase environment variables on the GitHub platform, follow the documentation <a href="https://docs.github.com/pt/actions/reference/environment-variables">here</a>. 

## Todo
- [x] Enviroment
- [x] Layout
- [x] Autentication Firebase
- [x] Firebase Roles
- [x] Create Room
- [x] Create Questions
- [x] Levels Admin/User
- [x] Features Admin Rooms 
- [x] Deploy Firebase
- [ ] Theme Dark/Light
- [ ] New features coming soon

## Roadmap

- [x] Stage 1 => together
  - [x] fundamentos ReactJS

- [x] Stage 2 => unidade
  - [x] imutabilidade
  - [x] ContextAPI
  - [x] UseState => leaft state up
  - [x] spreadprops => elements
      
- [x] Stage 3 => em busca de evolução
  - [x] firebase autorização: 32:48
  - [x] montando tela para criar sala: 44:29
  - [x] montando tela para criar pergunta: 1:01:28
  - [x] consumindo perguntas firebase: 1:13:47

- [x] Stage 4 => legado
  - [x] themecontextprovider 
  - [x] componente criando perguntas: 8:32
    - [x] desestruturando objetos para consumir: 10:23
    - [x] JSON.stringify{objeto}
    - [x] algoritmo de reconciliação: 18:30
  - [x] criando hook para consumir sala: 21:50
  - [x] montagem de sala admin: 26:55
  - [x] encerrando sala +plus (gap): 30:16
  - [x] aprendendo uns segredos (restoperator): 30:30
  - [x] montando like/funcionalidades para perguntas: 30:40
    - [x] slint => verificação de objetos dentro de objetos
    - [x] dependência de hooks / unsubscribe: 51:55
  - [x] remoção de pergunta: 1:02:27
  - [x] encerrar sala: 1:06:54

- [x] Stage 5 => juntos no próximo nível
  - [x] sass rules
  - [x] firebase-tools
  - [x] firebase deploy

## Tips
  - [x] Record<typeKey> para tipar objetos
  - [x] Sass rules
  - [x] useEffect / Hooks
  - [x] Spreadprops

## Contributing

Thank you for being interested in making this package better. We encourage everyone to help improve this project with new features, bug fixes, or performance improvements. Please take a little bit of your time to read our guide to make this process faster and easier.

## License

MIT License © [Araguaci](https://github.com/araguaci)
