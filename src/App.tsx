import Button from "common/design-system/Button"

const App = () => {
  return (
    <>
      <Button  onClick={() => console.log('waren löschen')}>
        korb löschen
      </Button>
      <Button  onClick={() => console.log('waren hinzufügen')}>
        korn himzufügen
      </Button>
    </>
  )
}
export default App