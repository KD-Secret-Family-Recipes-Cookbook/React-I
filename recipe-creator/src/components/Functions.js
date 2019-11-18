

export const addNewRecipe = recipe => {
    const newRecipe = {
      ...recipe,
      id: Date.now()
      // name: member.name,
      // email: member.email,
      // role: member.role
    }
    setTeamMember([...teamMember, newMember])
  }