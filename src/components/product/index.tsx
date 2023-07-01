import { Button } from "../common/button";
import { Input } from "../common/input";
import { FORM_RULES } from "./constants";
import styles from "./index.module.scss";
import { useProductState } from "./state/useProductState";

export const Product = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isValid,
    reset,
    isEditing,
  } = useProductState();
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.title}>Formulario de Registro</div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <div className={styles.row}>
              <Input
                label="ID"
                register={register}
                name={"id"}
                errorMessage={errors.id?.message}
                customRules={FORM_RULES.id}
                className={styles.input}
                disabled={isEditing}
              />
              <Input
                label="Nombre"
                register={register}
                name="name"
                errorMessage={errors.name?.message}
                customRules={FORM_RULES.name}
                className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <Input
                label="Descripción"
                register={register}
                name="description"
                errorMessage={errors.description?.message}
                customRules={FORM_RULES.description}
                className={styles.input}
              />
              <Input
                label="Logo"
                register={register}
                name="logo"
                errorMessage={errors.logo?.message}
                customRules={FORM_RULES.logo}
                className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <Input
                label="Fecha Liberación"
                register={register}
                name="date_release"
                errorMessage={errors.date_release?.message}
                customRules={FORM_RULES.date_release}
                type="date"
                className={styles.input}
              />
              <Input
                label="Fecha Revisión"
                disabled
                register={register}
                name="date_revision"
                errorMessage={errors.date_revision?.message}
                customRules={FORM_RULES.date_release}
                type="date"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => reset()} variant={"secondary"}>
              Reiniciar
            </Button>
            <Button type="submit" disabled={!isValid}>
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
