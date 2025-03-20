def lista_compras():
    lista = []

    while True:
        print("\nLista de Compras")
        print("1. Agregar elemento")
        print("2. Ver lista")
        print("3. Eliminar elemento")
        print("4. Salir")

        opcion = input("Seleccione una opción (1-4): ")

        if opcion == "1":
            item = input("Ingrese el elemento a agregar: ")
            lista.append(item)
            print(f"Elemento '{item}' agregado.")
            print("Lista actualizada:", lista)

        elif opcion == "2":
            if lista:
                print("Lista de compras:", lista)
            else:
                print("La lista está vacía.")

        elif opcion == "3":
            if lista:
                print("Lista actual:", lista)
                item = input("Ingrese el elemento a eliminar: ")
                if item in lista:
                    lista.remove(item)
                    print(f"Elemento '{item}' eliminado.")
                else:
                    print("El elemento no está en la lista.")
                print("Lista actualizada:", lista)
            else:
                print("No hay elementos para eliminar.")

        elif opcion == "4":
            print("Saliendo...")
            break

        else:
            print("Opción inválida. Intente de nuevo.")

lista_compras()
