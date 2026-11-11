# Controle de Comissões

App para controlar comissões de locação: contratos, faturas, previsão de recebimento (pagamento + 2 meses, comissão de 1%, ambos configuráveis), fim de período mínimo, oportunidades de renovação, gráfico e filtros.

Os dados ficam salvos no próprio computador/navegador. Use **Backup (JSON)** na aba Resumo de vez em quando.

## Usar no navegador
Abra o `index.html`, ou publique no GitHub Pages: **Settings → Pages → Deploy from a branch → main / (root)**.

## Gerar o executável (.exe) automaticamente
1. Suba estes arquivos para um repositório no GitHub.
2. Aba **Actions → Gerar executável Windows → Run workflow**.
3. Ao terminar, baixe o `.exe` em **Artifacts**.

Para publicar numa Release (com o .exe anexado): crie uma tag, por exemplo `git tag v1.0.0 && git push origin v1.0.0`.

- `Controle-de-Comissoes.exe`: versão portátil (não precisa instalar)
- `Instalador-Controle-de-Comissoes.exe`: instalador

## Gerar no seu PC
Com o Node.js instalado:

```
npm install
npm run dist     # o .exe sai na pasta dist
npm start        # abre o app sem gerar o .exe
```
