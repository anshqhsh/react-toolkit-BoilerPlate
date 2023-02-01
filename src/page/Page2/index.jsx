import * as yup from 'yup';

import { useFieldArray, useForm } from 'react-hook-form';

let renderCount = 0;

const formSchema = {
  name: yup.string().required('form.required_message'),
};

const fieldsSchema = yup.object().shape({
  test: yup
    .array()
    .of(yup.object().shape(formSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field')
    .test('test', 'test', value => {
      console.log('value', value);
      return true;
    }),
});

export default function Page2() {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      test: [{ name: '' }],
    },
    validationSchema: fieldsSchema,
    mode: 'onChange',
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'test',
    },
  );

  console.log(fields);
  const onSubmit = data => console.log('data', data);

  console.log('formState.isValid', formState.isValid);
  const { isValid } = formState;
  renderCount += 1;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      {/* <span className="counter">Render Count: {renderCount}</span> */}
      <p style={{ color: 'white' }}>IsValid: {isValid}</p>
      <ul>
        {!!fields.length &&
          fields.map((item, index) => {
            return (
              <li key={item.id}>
                <input
                  name={`test[${index}].name`}
                  defaultValue={`${item.name}`}
                  // ref={register({})}
                />

                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: 'append' });
          }}
        >
          append
        </button>
        <button type="button" onClick={() => prepend({ name: 'prepend' })}>
          prepend
        </button>
        <button
          type="button"
          onClick={() => insert(parseInt(2, 10), { name: 'insert' })}
        >
          insert at
        </button>

        <button type="button" onClick={() => swap(1, 2)}>
          swap
        </button>

        <button type="button" onClick={() => move(1, 4)}>
          move
        </button>

        <button type="button" onClick={() => remove(1)}>
          remove at
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}
