import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Alex', 'fcoalex');
  console.log(
    '---------------------------\nIsso vai levar 2 segundos\n---------------------------',
  );
  console.log(await user.getAddresses());
  console.log(
    '---------------------------\nIsso vai repetir [CACHE]\n---------------------------',
  );
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
