FROM node:18

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package.json package-lock.json ./

# Rodar npm install (mesmo que não haja dependências)
RUN npm install

# Copiar todo o conteúdo
COPY . .

# Expor porta (pode ser 4200)
EXPOSE 4200

# Comando de início (mesmo que apenas placeholder)
CMD ["npm", "start"]
