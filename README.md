## lytex-test-back

O projeto foi desenvolvido usando:

```txt
Node: 18.14.2
Package Manager: npm 9.5.1
MongoDB: 6.0.4
```

Para configurar o projeto execute os comandos abaixo:

Crie o arquivo para as variáveis de ambiente
```txt 
cp .env.example .env
```

Instale as dependencias

```txt
npm install
```

Execute o projeto
```txt 
npm start
```

O projeto estará acessivel em:
```txt
http://localhost:3000
```

Abaixo segue um arquivo exportado do [insomnia](https://insomnia.rest/download) com as rotas de api com exemplos de uso

https://drive.google.com/file/d/1OgGzAEvyDDhYCXtIgM5ObHwK-5YZzo-W/view?usp=sharing

<hr/>

Explique o que é uma Promise em Javascript e dê um exemplo de uso.

Promise é um objeto que representa uma falha ou conclusâo de operação assíncrona, ele pode estar em três estados, ```pending``` quando ela está em execução, ```fullfiled``` quando há um retorno de sucesso e ```rejected``` quando ocorre algum erro, ela pode ser usada para receber valores de forma síncrona, ou pode ser retornado o valor em outro momento do fluxo da operação.

### Exemplo

Arquivo controllers/functions.js
```js

async function promisseExample(req, res) {
    
    const promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, 3000);
    });

    let response = null;

    await promisse
        .then((value) => {
            response = value
            console.log(value)
        })
        .catch((error) => {
            response = error
            console.log(error)
        });

    res.status(200).json({response: response})
}

```

A função acima retorna um resultado aproximandamente 3 segundos após a requisição em caso de sucesso, foi usado uma promisse mas a resposta foi alterada para ter um retorno síncrono. Dessa forma há um tempo de espera até que se obtenha um retorno da requisição.

Esta mesma função pode ser rescrita para ser executada de forma assíncrona, isso faz com que seu retorno seja nulo, por causa do tempo de 3 segundos aplicado, até de fato ser executado alguma ação, abaixo segue um exemplo.

Arquivo controllers/functions.js
```js

function promisseExample(req, res) {

    const promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, 3000);
    });

    let response = null;

    promisse
        .then((value) => {
            response = value
            console.log(value)
        })
        .catch((error) => {
            response = error
            console.log(error)
        });

    res.status(200).json({response: response});
}

```
