# 1. Imagem base com Node
FROM node:20-alpine

# 2. Definir pasta de trabalho
WORKDIR /app

# 3. Copiar dependências
COPY package*.json ./

# 4. Instalar dependências
RUN npm install

# 5. Copiar o restante do código
COPY . .

# 6. Expõe a porta em que o app roda
EXPOSE 3000

# 7. Comando para iniciar
CMD ["npm", "start"]

