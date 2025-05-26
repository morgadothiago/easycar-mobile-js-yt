#### Cola de codigo

---

## Alert presonalizado

```javascript
 onPress={() =>
          Alert.alert("Area do passageiro", "Escola o destino que quer ir", [
            {
              text: "ok",
              style: "default",
              onPress: () => {
                console.log("ir para tela do mapa...");
              },
            },
            {
              text: "Cancelar",
              onPress: () => console.log("Ação cancelada"),
              style: "cancel",
            },
          ])
        }


```

@morgadothiago
