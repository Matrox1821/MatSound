import Modal from "@/components/Modal";
import LoginButton from "@/components/LoginButton";

export default function Login() {
  return (
    <div>
      <Modal
        title="Bienvenido a Matfy!"
        subtitle="Autoriza tu cuenta de Spotify">
        <LoginButton />
      </Modal>
    </div>
  );
}
