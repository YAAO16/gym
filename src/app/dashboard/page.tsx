import { getUsuarios } from '@/services/usario.service'
import React from 'react'

export default async function Dashboard() {
  const usuarios = await getUsuarios();
  return (
    <div>
      hellos
      {usuarios.usuarios.map(usuario => (<p key={usuario.username}>{usuario.username}</p>))}
    </div>
  )
}
