# Imagem base Node 18
FROM node:18

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas os arquivos de dependências primeiro
# Isso ajuda no cache e evita reinstalar tudo a cada build
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta que a API usa
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
