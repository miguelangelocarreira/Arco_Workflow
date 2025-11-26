import { Client, Project } from '../types';

export const generateLeiriaData = () => {
  const clients: Client[] = [
    { id: "c1", name: "Politécnico de Leiria", email: "contact@ipleiria.pt", city: "Leiria", nif: "500000001", phone: "244 830 010", address: "Rua General Norton de Matos", zip: "2411-901" },
    { id: "c2", name: "Nerlei - Associação Empresarial", email: "geral@nerlei.pt", city: "Leiria", nif: "500000002", phone: "244 800 900", address: "Zona Industrial", zip: "2400-000" },
    { id: "c3", name: "Movicortes S.A.", email: "info@movicortes.pt", city: "Azoia", nif: "500000003", phone: "244 850 240", address: "Estrada Nacional", zip: "2445-000" },
    { id: "c4", name: "LeiriaMoldes", email: "comercial@leiriamoldes.pt", city: "Marinha Grande", nif: "500000004", phone: "244 500 600", address: "Zona Industrial", zip: "2430-000" },
    { id: "c5", name: "Restaurante O Matilde", email: "reservas@matilde.pt", city: "Leiria", nif: "500000005", phone: "244 000 000", address: "Praça Rodrigues Lobo", zip: "2400-180" },
    { id: "c6", name: "Câmara Municipal de Leiria", email: "cmleiria@cm-leiria.pt", city: "Leiria", nif: "500000006", phone: "244 839 500", address: "Largo da República", zip: "2414-006" },
    { id: "c7", name: "Grupo Lusiaves", email: "info@lusiaves.pt", city: "Leiria", nif: "500000007", phone: "244 800 000", address: "Zona Industrial", zip: "2410-000" },
    { id: "c8", name: "Void Software", email: "hello@void.pt", city: "Leiria", nif: "500000008", phone: "244 000 111", address: "Rua das Tecnologias", zip: "2400-000" },
    { id: "c9", name: "La Redoute Portugal", email: "info@laredoute.pt", city: "Leiria", nif: "500000009", phone: "244 000 222", address: "Centro Logístico", zip: "2400-000" },
    { id: "c10", name: "Jornal de Leiria", email: "redacao@jornaldeleiria.pt", city: "Leiria", nif: "500000010", phone: "244 000 333", address: "Rua da Imprensa", zip: "2400-000" }
  ].map(c => ({ ...c, createdAt: Date.now() }));

  const projects: Project[] = [];
  const statuses = ["orçamento", "agendado", "work", "faturar", "pago"] as const;

  for (let i = 0; i < 20; i++) {
    const client = clients[Math.floor(Math.random() * clients.length)];
    const isPaid = Math.random() > 0.6;
    const status = isPaid ? "pago" : statuses[Math.floor(Math.random() * statuses.length)];

    projects.push({
      id: `p-${i}-${Date.now()}`,
      clientId: client.id,
      title: `Campanha ${Math.floor(Math.random() * 2025)} - ${client.name}`,
      status: status,
      items: [
        { id: `item-${i}`, desc: "Serviços de Agência", qty: 1, price: Math.floor(Math.random() * 1500) + 250 }
      ],
      discount: 0,
      urgent: Math.random() > 0.8,
      startDate: new Date().toISOString(),
      endDate: null,
      createdAt: Date.now() - Math.floor(Math.random() * 1000000000)
    });
  }

  return { clients, projects };
};