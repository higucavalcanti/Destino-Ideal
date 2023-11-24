import * as C from './styles';

export const ResultArea = () => {
    return (
      <C.Container>
        <h1>Resultado</h1>
        <C.ResultContainer>
        <label>
          label
          <input 
              type="resultado"
              value="Lorem ipsum dolor sit amet. Non Quis harum et cupiditate sunt aut enim aliquid ab libero minima qui facilis corporis rem porro debitis in autem molestias. Qui voluptatum illo quo voluptatem iusto At perspiciatis temporibus sit nobis voluptas."
          />
      </label>
      <label>
          label
          <input 
              type="resultado"
              value="Lorem ipsum dolor sit amet. Non Quis harum et cupiditate sunt aut enim aliquid ab libero minima qui facilis corporis rem porro debitis in autem molestias. Qui voluptatum illo quo voluptatem iusto At perspiciatis temporibus sit nobis voluptas."
          />
      </label>
      <label>
          label
          <input 
              type="resultado"
              value="Lorem ipsum dolor sit amet. Non Quis harum et cupiditate sunt aut enim aliquid ab libero minima qui facilis corporis rem porro debitis in autem molestias. Qui voluptatum illo quo voluptatem iusto At perspiciatis temporibus sit nobis voluptas."
          />
      </label>
      {/*DEPOIS TEM QUE COMPONENTIZAR ISSO KKKKK*/}
        </C.ResultContainer>
      </C.Container>
    )
  }